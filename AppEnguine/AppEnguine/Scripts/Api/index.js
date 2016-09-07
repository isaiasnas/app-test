$(function () {
    $('#clickModal').on('click', function (e) {
        e.preventDefault();
        $('#modalExecute').text('Incluir');
        $('#modalExecute').data('id', 'incluir');
        $('#modalHead').text('Incluir Veiculo');

        var _form = $('#formAdd');
        _form.show();
        $('#modalBody').append(_form);
        var _modal = $('#modalBody');
        $('#myModal').modal({});
    });
})