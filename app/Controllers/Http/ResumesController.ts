import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Resume from 'App/Models/Resume';


export default class ResumesController {
    public async index({response}: HttpContextContract)
    {
        response.status(200)
        return Resume.all()
    }

    public async add({request, response}: HttpContextContract)
    {
        const body = request.body()
        const resume = await Resume.create(body)
        response.status(201)
        return resume.save()
    }

    public async show({params}: HttpContextContract)
    {
        return Resume.find(params.id)
    }

    public async edit({request, response}: HttpContextContract)
    {
        const body = request.body()
        const resume = await Resume.findOrFail(body.id)
        resume.full_name = body.full_name
        resume.phone = body.phone
        resume.email = body.email
        resume.date_of_birth = body.date_of_birth
        resume.education = body.education
        resume.profession = body.profession
        resume.city = body.city
        resume.desired_salary = body.desired_salary
        resume.key_skills = body.key_skills
        resume.about_yourself = body.about_yourself
        resume.url_photo = body.url_photo
        resume.status_of_resume = body.status_of_resume
        response.status(201)
        return resume.save()
    }

    public async updateStatus({request, response}: HttpContextContract)
    {
        const body = request.body()
        const resume = await Resume.findOrFail(body.id)
        resume.status_of_resume = body.status_of_resume
        response.status(201)
        return resume.save()
    }

}
