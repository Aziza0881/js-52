let st_box = document.querySelector('.st_box')
let form = document.forms.list
let stray_kids = []

form.onsubmit = (e) => {
    e.preventDefault()
    let str_kid = {
        id: Math.random(),
        name: new FormData(form).get('name'),
        age: 2024-new FormData(form).get('age')
    }

    if (str_kid.name.trim() !== "") {
        stray_kids.push(str_kid)
        reload(stray_kids, st_box)
    }
}

function reload(arr, place) {
    place.innerHTML = ""

    for (const item of arr) {
        let dibil = document.createElement('div')
        let no = document.createElement('span')
        let name1 = document.createElement('span')
        let birthday = document.createElement('span')
        let action = document.createElement('div')
        let list = document.createElement('img')
        let delet = document.createElement('img')

        dibil.classList.add('dibil')
        no.classList.add('no')
        name1.classList.add('name')
        birthday.classList.add('birthday')
        action.classList.add('action')
        list.classList.add('list')
        delet.classList.add('delet')

        no.innerText = item.id
        name1.innerText = item.name
        birthday.innerText = item.age
        list.src = './img1/delet.png'
        delet.src = './img1/list.png'

        place.append(dibil)
        dibil.append(no, name1, birthday, action)
        action.append(list, delet)

        delet.onclick = () => {
            stray_kids = stray_kids.filter(el => el.id !== item.id)
            dibil.remove()
        }
    }
}