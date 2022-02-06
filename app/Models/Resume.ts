import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Resume extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public full_name:string 

  @column()
  public phone:string
  
  @column()
  public email:string

  @column()
  public date_of_birth: DateTime

  @column()
  public education: JSON

  @column()
  public profession: string

  @column()
  public city: string

  @column()
  public desired_salary: string

  @column()
  public key_skills: string

  @column()
  public about_yourself: string

  @column()
  public url_photo: string

  @column()
  public status_of_resume: string
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
