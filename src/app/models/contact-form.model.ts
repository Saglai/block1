export interface contactForm {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    gender: string;
    isMarried?: boolean;
    country: string;
    address: {
        city: string;
        street: string;
    }
}