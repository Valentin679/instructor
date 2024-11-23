export async function getLessons() {
    const response = await fetch("http://localhost:8081/api/lessoms", {
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

export const addLesson = async (id, title, price, category) => {
    await fetch('https://ratapi.vercel.app/api/materials', {
        method: 'POST',
        //
        body: JSON.stringify({
            title,
            price,
            category: category.value,
            categoryTitle: category.label


        }),
        headers: {
            'Content-type': 'application/json; charset=utf-8'
        }
    })
}


export const putLessons = async (changedMaterialsId, title, category, price) => {
    await fetch('https://ratapi.vercel.app/api/materials', {
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