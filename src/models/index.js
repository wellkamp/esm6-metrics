import Knex from 'knex'
import Bookshelf from 'bookshelf'
import BookshelfUuid from 'bookshelf-uuid'
import BookshelfUpsert from 'bookshelf-upsert'
import BookshelfCascadeSoftDelete from 'bookshelf-cascade-soft-delete'

import knexConfig from '../database/knexfile'


const knex = Knex(knexConfig['development'])
const bookshelf = Bookshelf(knex)

bookshelf.plugin(BookshelfUuid)
bookshelf.plugin(BookshelfUpsert)
bookshelf.plugin(BookshelfCascadeSoftDelete)

export const Model = (modelParams, ...args) =>
  bookshelf.Model.extend(
    {
      fetchAll: function() {
        return bookshelf.Model.prototype.fetchAll
          .apply(this, arguments)
          .catch(err => {
            throw err.toString()
          })
      },
      fetch: async function() {
        return bookshelf.Model.prototype.fetch
          .apply(this, arguments)
          .catch(err => {
            throw err.toString()
          })
      },
      save: function() {
        return bookshelf.Model.prototype.save
          .apply(this, arguments)
          .catch(err => {
            if (this.upsert) throw err.sqlMessage
            throw err.toString()
          })
      },
      upsert: function() {
        this.upsert = true
        return bookshelf.Model.prototype.upsert
          .apply(this, arguments)
          .catch(err => {
            throw err.toString()
          })
      },
      destroy: async function() {
        await bookshelf.Model.prototype.destroy
          .apply(this, arguments)
          .catch(err => {
            throw err.toString()
          })

        return Deleted()
      },
      ...modelParams
    },
    ...args
  )

export default bookshelf
