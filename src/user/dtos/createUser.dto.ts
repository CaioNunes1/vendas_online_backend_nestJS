export interface CreateUserDto{
    name:string,
    email:string,
    phone:string,
    cpf:string,
    password:string,
}

// DTO significa Data Transfer Object. É um objeto que define como os dados serão enviados pela rede.
//  Neste caso, CreateUserDto provavelmente contém a estrutura dos dados necessários para criar um 
//  usuário, como nome, e-mail, senha, etc.