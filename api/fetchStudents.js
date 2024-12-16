const instance = {
    url: 'https://instructorexpress.vercel.app/'
}


export async function getStudents() {
    const response = await fetch(instance.url + "api/students/category/b", {
        method: "GET",
        headers: { "Accept": "application/json" }
    });
    if (response.ok === true) {
        return await response.json()
    }
}

export async function getStudentById(id) {
    const response = await fetch(instance.url + "api/students/category/b/"+id, {
        method: "GET",
        headers: { "Accept": "application/json" }
    });
    if (response.ok === true) {
        return await response.json()
    }
}

export const addStudent = async (data) => {
    const response = await fetch(instance.url + "api/students/category/b", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    })
    if (response.ok === true) {
        return await response.json()
    }
}

export const editStudentGrades = async (id, slug, level,index) => {
    await fetch(instance.url + "api/students/category/b/edit", {
        method: 'PUT',
        //
        body: JSON.stringify({
            id, slug, level, index
        }),
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    })
}
