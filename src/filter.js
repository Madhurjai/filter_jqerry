var products = [
  {
    id: '100',
    name: 'iPhone 4S',
    brand: 'Apple',
    os: 'iOS',
  },
  {
    id: '101',
    name: 'Moto X',
    brand: 'Motorola',
    os: 'Android',
  },
  {
    id: '102',
    name: 'iPhone 6',
    brand: 'Apple',
    os: 'iOS',
  },
  {
    id: '103',
    name: 'Samsung Galaxy S',
    brand: 'Samsung',
    os: 'Android',
  },
  {
    id: '104',
    name: 'Google Nexus',
    brand: 'ASUS',
    os: 'Android',
  },
  {
    id: '105',
    name: 'Surface',
    brand: 'Microsoft',
    os: 'Windows',
  },
]

$(document).ready(function () {
  var html =
    '<table id = "tab"><tr><th> ID </th><th> name </th><th> brand </th><th> os </th><th> remove </th></tr>'
  for (i of products) {
    html +=
      '<tr id = ' +
      i.id +
      ' ><td>' +
      i.id +
      '</td><td>' +
      i.name +
      '</td><td>' +
      i.brand +
      '</td><td>' +
      i.os +
      '</td><td><a href = "#" id = "remove" data-id = ' +
      i.id +
      '> remove </a></td></tr>'
  }
  html += '</table>'
  $('.container').html(html)
  $('tr').css('border', '2px solid black')
  $('th').css('border', '2px solid red')
  $('td').css('border', '2px solid black')

  $('body').on('click', '#remove', function () {
    var pid = $(this).data('id')
    $('#' + pid).hide()
    // return del(pid)
  })

  //  var os_value = $("#os").val();
  //  var brand_value = $("#brand").val();

  var os_arr = []
  for (i of products) {
    os_arr.push(i.os)
  }
  var set = new Set(os_arr)
  var unique_os = Array.from(set)
  console.log(unique_os)
  var os = '<select name = "os" id = "os"><option value = "none>"none</option>'
  for (i of unique_os) {
    os += '<option value = ' + i + '>' + i + '</option>'
  }
  os += '</select>'
  //  $('#html').html(os);
  $('table').before(os)

  var brand_arr = []
  for (i of products) {
    brand_arr.push(i.brand)
  }
  var brand_set = new Set(brand_arr)
  console.log(brand_set)
  var brand_arr = Array.from(brand_set)
  var brand =
    '<select name = "brand" id = "brand"><option value = "none>"none</option>'
  for (i of brand_arr) {
    brand += '<option value = ' + i + '>' + i + '</option>'
  }
  brand += '</select>'
  //  $('#html').html(brand);
  $('table').before(brand)
  $('#brand').css('margin', '20px')

  function display(os_obj) {
    var os_display =
      '<table id = "tab"><tr><th> ID </th><th> name </th><th> brand </th><th> os </th><th> remove </th></tr>'
    for (i of os_obj) {
      os_display +=
        '<tr id = ' +
        i.id +
        ' ><td>' +
        i.id +
        '</td><td>' +
        i.name +
        '</td><td>' +
        i.brand +
        '</td><td>' +
        i.os +
        '</td><td><a href = "#" id = "remove" data-id = ' +
        i.id +
        '> remove </a></td></tr>'
    }
    html += '</table>'
    $('.container').html(os_display)
    $('table').before(os)
    $('table').before(brand)
    $('tr').css('border', '2px solid black')
    $('th').css('border', '2px solid red')
    $('td').css('border', '2px solid black')
    return
  }

  var os_obj = []
  var final = []
  $('#os').change(function () {
    var os_value = $(this).val()
    // console.log(brand_value, os_value)

    // $('#tab').css('display',"none");
    // var os_table = '<table></table>'

    for (i of products) {
      if (i.os == os_value) {
        os_obj.push(i)
        console.log(os_obj)
        //  display(os_obj);
      }
    }
  })
  $('#brand').change(function () {
    var brand_value = $(this).val()
    $('#tab').css('display', 'none')
    // var brand_table = '<table></table>'
      for (j of os_obj) {
        if (j.brand == brand_value) {
          final.push(j) ;
        }
      
    }
    if(final.length != 0){
      console.log(final) ;
      display(final);

    }
    else{
      alert("not found");
    }
  })
})
