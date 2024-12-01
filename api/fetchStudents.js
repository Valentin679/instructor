export async function getStudents() {
    const response = await fetch("http://localhost:8800/api/students/category/b", {
        method: "GET",
        headers: { "Accept": "application/json" }
    });
    // если запрос прошел нормально
    if (response.ok === true) {
        // получаем данные
        let res = await response.json();
        // console.log(res)
        // setPending(false)
        return res
    }
}

export const addStudent = async (data) => {
    const response = await fetch('http://localhost:8800/api/students/category/b', {
        method: 'POST',
        //
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    })
    if (response.ok === true) {
        let res = await response.json();
        return res
    }
}


export const putStudent = async (changedMaterialsId, title, category, price) => {
    await fetch('http://localhost:8800/api/students/category/b', {
        method: 'PUT',
        //
        body: JSON.stringify({
            oldTitle: changedMaterialsId,
            title: title,
            category: category.value,
            categoryTitle: category.label,
            price: price
        }),
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    })
}

export const deleteMaterials = async (id) => {
    await fetch('https://ratapi.vercel.app/api/materials/' + id, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    })
}