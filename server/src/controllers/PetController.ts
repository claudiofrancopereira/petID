import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Pet } from '../models/Pet';

export default {
    async create(request: Request, response: Response) {
        const petsRepository = getRepository(Pet);

        const {
            microchip,
            name,
            breed,
            color,
            sex,
            birth,
            owner,
            address,
            contact,
            cpf,
            rg,
            email,
            notes
        } = request.body

        const requestFiles = request.files as Express.Multer.File[];
        const files = requestFiles.map(file => {
            return { path: file.filename }
        });

        const pet = petsRepository.create({
            microchip,
            name,
            breed,
            color,
            sex,
            birth,
            owner,
            address,
            contact,
            cpf,
            rg,
            email,
            notes,
            files
        });

        await petsRepository.save(pet);

        return response.status(201).json(pet);

    },

    async index(request: Request, response: Response) {
        const petsRepository = getRepository(Pet);

        const pets = await petsRepository.find({
            relations: ['files']
        });

        return response.json(pets)
    }
}