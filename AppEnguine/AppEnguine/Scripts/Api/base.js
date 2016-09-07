$(function () {
    var template = "<div class=\"col-sm-3 col-lg-4 dynamic-container \"><hr><div class=\"thumbnail\"><img style=\"width:193px;height:109px\" src=\"\" /><div class=\"caption\"><h3></h3><p id=\"desc\"></p><p><div class=\"btn-group\" role=\"group\" aria-label=\"...\"><button type=\"button\" class=\"btn btn-default btn-xs alterarVeicle\">Alterar</button><button type=\"button\" class=\"btn btn-danger  btn-xs deletarVeicle\">Deletar</button><button type=\"button\" class=\"btn btn-default  btn-xs testDriveVeicle\">Test Drive</button></div></p></div></div></div>";
    var corJeep = [{ id: 1, cor: 'Branco', ex: 'png' }, { id: 2, cor: 'Prata', ex: 'jpg' }, { id: 3, cor: 'Preto', ex: 'jpg' }, { id: 4, cor: 'Vermelho', ex: 'jpg' }];
    var corCamaro = [{ id: 1, cor: 'Amarelo', ex: 'png' }, { id: 2, cor: 'Branco', ex: 'png' }, { id: 3, cor: 'Preto', ex: 'png' }, { id: 4, cor: 'Vermelho', ex: 'png' }];

    function setColorVeicle() {
        $('#formAddCor').text('');
        var value = arguments[1];
        (value == 'jeep') ? $('#divOffRoad').show() : $('#divOffRoad').hide();
        $.each(arguments[0], function (k, v) {
            $('#formAddCor').append('<option data-desc="' + $('#formAddTipo option:selected').text() + ' - ' + v.cor + ' - ' + (value == 'jeep' ? '' : '0 a 100km/h em 6seg') + '"  data-id="' + _rootPath + value + '/' + v.id + '.' + v.ex + '" value="' + v.id + '">' + v.cor + '</option>');
        });
    }
    setColorVeicle(corCamaro, 'camaro');
    $('#formAddTipo').on('change', function (e) {
        e.preventDefault();
        $(this).val() != 1 ? $('#divOffRoad').fadeOut() : $('#divOffRoad').fadeIn();
        $(this).val() == 1 ? setColorVeicle(corJeep, 'jeep') : setColorVeicle(corCamaro, 'camaro');
    });

    $('#modalClose').on('click', function (e) {
        $('#modalBody').find(':input').val('');
    });

    $('#modalExecute').on('click', function (e) {
        e.preventDefault();
        var form = $(this).closest('form');

        form.validate({
            errorClass: 'field-validation-error',
            rules: {
                formAddTipo: { required: true, },
                formAddNome: { required: true, },
                formAddAno: { required: true, number: true, range: [1970, 2016] },
                formAddCor: { required: true, },
                formAddOffRoad: { required: true, },
            },
            messages: {
                formAddTipo: { required: 'Campo obrigatório' },
                formAddNome: { required: 'Campo obrigatório' },
                formAddAno: { required: 'Campo obrigatório', number: 'Digite um valor numérico', range: 'ano entre 1970 e 2016' },
                formAddCor: { required: 'Campo obrigatório' },
                formAddOffRoad: { required: 'Campo obrigatório' },
            },
            highlight: function (element) {
                $(element).addClass('input-validation-error');
            },
            unhighlight: function (element) {
                $(element).removeClass('input-validation-error');
            }
        });

        if (form.valid()) {
            if ($(this).data('id') == 'incluir') {
                var _template = $(template);
                $(_template).find('h3').attr('data-id', new Date().getTime());
                $('#contentTemplate').append(_template);
            } else {
                var _template = $(_target);
            }
            {
                $(_template).find('img').attr('src', $('#formAddCor option:selected').data('id'));
                $(_template).find('h3').text($('#formAddTipo option:selected').text());
                $(_template).find('h3').attr('data-tipo', $('#formAddTipo option:selected').text());
                $(_template).find('h3').attr('data-tipo-val', $('#formAddTipo option:selected').val());
                $(_template).find('h3').attr('data-desc', $('#formAddNome').val());
                $(_template).find('h3').attr('data-ano', $('#formAddAno').val());
                $(_template).find('h3').attr('data-cor', $('#formAddCor option:selected').text());
                $(_template).find('h3').attr('data-cor-val', $('#formAddCor option:selected').val());
                $(_template).find('h3').attr('data-off', $('#formAddOffRoad option:selected').text());
                $(_template).find('h3').attr('data-off-val', $('#formAddOffRoad option:selected').val());
                $(_template).find('h3').attr('data-type',
                    $('#formAddTipo option:selected').val() == 1 ? 'capaz de andar na lama' : '0 a 100km/h em 6seg');
            }
            $('#modalClose').click();
        } else {
            form.validate();
        }
    });

    $('#contentTemplate').on('click', '.alterarVeicle', function (e) {
        e.preventDefault();
        _target = $(this).closest('.dynamic-container');
        $('#formAddTipo').val($(_target).find('h3').attr('data-tipo-val'));
        $(_target).find('h3').attr('data-tipo-val') == 0 ? (setColorVeicle(corCamaro, 'camaro')) : (setColorVeicle(corJeep, 'jeep'));
        $('#formAddNome').val($(_target).find('h3').attr('data-desc'));
        $('#formAddAno').val($(_target).find('h3').attr('data-ano'));
        $('#formAddCor').val($(_target).find('h3').attr('data-cor-val'));
        $('#formAddOffRoad').val($(_target).find('h3').attr('data-off-val'));
        $('#modalExecute').text('Alterar');
        $('#modalHead').text('Alterar Veiculo');
        $('#modalExecute').data('id', 'alterar');
        $('#myModal').modal({});
    });

    var _target = null;

    $('#contentTemplate').on('click', '.deletarVeicle', function (e) {
        e.preventDefault();
        _target = $(this).closest('.dynamic-container');
        $('#modalExecuteDelete').attr('data-id', $(this).closest('.caption').find('h3').data('id'));
        $('#myModalDelete').modal({});
    });

    $('#myModalDelete').on('click', '#modalExecuteDelete', function (e) {
        e.preventDefault();
        $(_target).remove();
        $('#modalCloseDelete').click();
    });

    $('#contentTemplate').on('click', '.testDriveVeicle', function (e) {
        e.preventDefault();
        var _body = $(this).closest('.thumbnail').clone();
        $(_body).find('.btn-group').remove();
        $('#myModalTest').find('#modalBodyTest').text('').append(_body);

        setTimeout(function () {
            var _context = "------------ <br>" + $(_body).find('h3').attr('data-desc') +
                "<br>" + $(_body).find('h3').attr('data-ano') +
                "<br>" + $(_body).find('h3').attr('data-cor') +
                "<br>" + $(_body).find('h3').attr('data-type');
            $(_body).append(_context)
        }, 1000);
        $('#myModalTest').modal({});
    });
});