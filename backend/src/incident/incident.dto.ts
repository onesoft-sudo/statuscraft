import { IsNotEmpty, IsString, IsOptional, IsArray, ArrayNotEmpty } from 'class-validator';

export class CreateIncidentDTO {
    @IsString()
    @IsNotEmpty()
    title: string;

    @IsOptional()
    @IsString()
    @IsNotEmpty()
    description?: string;

    @IsArray()
    @ArrayNotEmpty()
    serviceIds: number[];
}