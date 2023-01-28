const data =[];
let baseId = 1;

const getAllUsers =async()=> await data;

const getUserById =async(id)=> await data.find( user => user.id == id);

const addNewUser =async(data)=>{

    const newData ={
        "id": baseId++,
        "firstName": data.firstName,
        "lastName": data.lastName,
        "email": data.email,
        "password": data.password,
        "age": data.age

    }
    await data.push(newData);
    return newData;
}

module.exports={
    getAllUsers,
    getUserById,
    addNewUser
}