import { Address } from 'cluster';
import { Company } from './company';

export interface User {
    id: number,
    username: string,
    email: string,
    address: Address,
    phone: string,
    website: string,
    company: Company
}
