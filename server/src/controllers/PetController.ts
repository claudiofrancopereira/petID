import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Pet } from '../models/Pet';

export default {
    async create(request: Request, response: Response) {
        const petsRepository = getRepository(Pet);

        const {
            id,
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

        const pet = petsRepository.create({
            id,
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
        });

        await petsRepository.save(pet);

        return response.status(201).json(pet);

    },

    async index(request: Request, response: Response) {
        const petsRepository = getRepository(Pet);

        const pets = await petsRepository.find();

        return response.json(pets)
    }
}