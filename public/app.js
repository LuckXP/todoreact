var deleteToDo = function(){
    var id = $(event.target).closest('tr').attr('id');
    var toDo = $(event.target).closest('tr');

    $.ajax({
        url: '/api/todos/' + id,
        method: 'DELETE',
    }).done(function(){
        console.log('task has been deleted!');
        toDo.remove();
    });
};

$('.deleteToDo').on('click', deleteToDo);

var addToDo = function(event){
    event.preventDefault();
    
    var taskName = $('#taskName').val();
    var dueDate = $('#dueDate').val();
    var description = $('#description').val();
    var $table = $('#toDoTable');

    var toDo = {};
    toDo.taskName = taskName;
    toDo.id = ;
    toDo.gender = gender;

    if(name && age && gender){
        $.ajax({
            url: ('/api/bears'),
            method: 'POST',
            data: bear
        }).done(function(data){
            console.log('BEAR POSTED', data);
            $table.append('<tr id="' + data._id + '">\
                            <td>' + data.name + '</td>\
                            <td>' + data.age + '</td>\
                            <td>' + data.gender + '</td>\
                            <td><button type="button" class="btn btn-warning deleteBear">Delete Bear</button></td>\
                        </tr>'
                         );
            $('.deleteBear').on('click', deleteBear);
            $('#name').val('');
            $('#age').val('');
            $('#gender').val('');

        });
    }
};

$('#addBear').on('click', addBear);