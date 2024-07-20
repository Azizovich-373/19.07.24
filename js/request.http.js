import { createToast } from "./utils.js"
const baseUrl = 'http://localhost:8080'


export async function getData(path) {
    try {
        const res = await fetch(baseUrl + path)
    
        if(res.status === 200 || res.status === 201) {
            const data = await res.json()
            return data
        } 
        createToast("Succesfully", 'green')
    } catch(error) {
        createToast(error, 'red')
        return []
    }
}
export async function postData(path, body) {
    try {
        const res = await fetch(baseUrl + path, {
            method: "POST",
            body: JSON.stringify(body)
        })
    
        if(res.status === 200 || res.status === 201) {
            const data = await res.json()
            createToast("Posted succesfully", 'green')
            return data
        } 
    } catch(error) {
        createToast(error, 'red')
        return []
    }
}
export async function deleteData(path, body) {

    try {
        const res = await fetch(baseUrl + path, {
            method: 'DELETE',
        });

        if (res.status === 200 || res.status === 201) {
            createToast("Delete succesfully", 'green');
        }
    } catch (error) {
        createToast(error, 'red');
        return data
    }
}
export async function patchedData(path, body) {
    try {
        const res = await fetch(baseUrl + path, {
            method: "PATCH",
            body: JSON.stringify(body)
        });

        if (res.status === 200 || res.status === 201) {
            const data = await res.json();
            createToast("Patched successfully", 'green');
            return data;
        }
    } catch (error) {
        createToast(error, 'red');
        return []
    }
}