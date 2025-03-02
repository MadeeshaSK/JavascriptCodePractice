//CRUD
//CRU *D*

const fletchData = (callback) => {
    $.ajax({
        url: "https://jsonplaceholder.typicode.com/photos?_limit=20",
        method: "GET",
        dataType: "json",
        success: (result) => {
            console.log(result);
            callback(result);
        },
        error: (err) => {
            console.log(err);
        }
    });
}

const loadData = () => {
    fletchData((data) => {

        $.each(data, function(i, element) {
            const row = $("<tr>");
            const colId = $("<td>").text(element.id);
            const colAlbumId = $("<td>").text(element.albumId);
            const colTitle = $("<td>").text(element.title);
            const img = $("<img>")
                .attr('src', element.thumbnailUrl)
                .attr('loading', 'lazy')
                .css({
                    'width': '70px',
                    'height': '70px'
                });
            row.append(colId, colAlbumId, colTitle, img);
            $('.table tbody').append(row);
        });
    });
};

const saveData = () => {
    const newData = {
        "albumId": 1,
        "id":1,
        "title": "lorem ipsum",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    }

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/photos",
        method: "POST",
        data:JSON.stringify(newData),
        timeout:5000,
        contentType:'application/json',
        success: (result) => {
            console.log(result);
        },
        error: (err) => {
            console.log(err);
        }
    });
}

const updateData = () => {
    const newData = {
        "albumId": 1,
        "id":1,
        "title": "lorem ipsum",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    }

    $.ajax({
        url: "https://jsonplaceholder.typicode.com/photos/1",
        method: "PUT",
        data:JSON.stringify(newData),
        timeout:5000,
        contentType:'application/json',
        success: (result) => {
            console.log(result);
        },
        error: (err) => {
            console.log(err);
        }
    });
}

const findOne = () => {
    let id = 500;
    $.ajax({
        url: `https://jsonplaceholder.typicode.com/photos/${id}`,
        method: "GET",
        dataType: "json",
        success: (result) => {
            console.log(result);
            callback(result);
        },
        error: (err) => {
            console.log(err);
        }
    });
}

const deleteData = () => {
    let id = 500;
    $.ajax({
        url: `https://jsonplaceholder.typicode.com/photos/${id}`,
        method: "DELETE",
        dataType: "json",
        success: (result) => {
            console.log(result);
            callback(result);
        },
        error: (err) => {
            console.log(err);
        }
    });
}