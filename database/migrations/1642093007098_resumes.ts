import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Resumes extends BaseSchema {
  protected tableName = 'resumes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('full_name')
      table.string('phone')
      table.string('email')
      table.dateTime('date_of_birth')
      table.json('education')
      table.string('profession')
      table.string('city')
      table.string('desired_salary')
      table.text('key_skills')
      table.text('about_yourself')
      table.string('url_photo')
      table.string('status_of_resume')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
