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
var arr = []
var brand_val = 'none'
var os_val = 'none'

$(document).ready(function () {
  display(products)
  var brand_arr = []
  for (i of products) {
    brand_arr.push(i.brand)
  }
  var brand_set = new Set(brand_arr)
  console.log(brand_set)
  var brand_arr = Array.from(brand_set)
  var brand =
    '<select name = "brand" id = "brand"><option value = "none">none</option>'
  for (i of brand_arr) {
    brand += '<option value = ' + i + ' >' + i + '</option>'
  }
  brand += '</select>  '
  $('#select').append(brand)
  $('#brand').css('margin', '20px')

  var os_arr = []
  for (i of products) {
    os_arr.push(i.os)
  }
  var set = new Set(os_arr)
  var unique_os = Array.from(set)
  var os = '<select name = "os" id = "os"><option value = "none">none</option>'
  for (i of unique_os) {
    os += '<option value = ' + i + '>' + i + '</option>'
  }
  os +=
    "</select> <form> <input type = 'text' id = 'input'><input type = 'button' id = 'search' value = 'search'></form>"
  $('#select').append(os)

  $('body').on('click', '#remove', function () {
    var pid = $(this).data('id')
    $('#' + pid).hide()
  })

  $('form').on('click', '#search', function () {
    var val = $('#input').val()
    //  for(i of os_arr){
    //    if(i == val){
    //  os_val = val ;
    //   display_selected(os_val, brand_val);
    //    }
    //  }
    var s = []
    for (i of products) {
      if (i.id == val || i.name == val) {
        s.push(i)
      }
    }
    display(s)
  })

  $('#select').on('change', '#os', function () {
    os_val = $(this).val()
    display_selected(os_val, brand_val)
  })
  $('#select').on('change', '#brand', function () {
    brand_val = $(this).val()
    display_selected(os_val, brand_val)
  })
  // if()
})
function display(products) {
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
  $('#table').html(html)
  $('tr').css('border', '2px solid black')
  $('th').css('border', '2px solid red')
  $('td').css('border', '2px solid black')

}
function display_selected(os, brand) {
 
  if (brand == 'none' && os == 'none') {
    arr = products
  } else if (brand == 'none') {
    arr = []
    for (i of products) {
      if (i.os == os) {
        arr.push(i)
      }
    }
    // display(os_obj)
  } else if (os == 'none') {
    arr = []
    for (i of products) {
      if (i.brand == brand) {
        arr.push(i)
      }
    }
    // display(brand_obj);
  } else {
    arr = []
    for (i of products) {
      if (i.os == os && i.brand == brand) {
        arr.push(i)
      }
    }
    // display(arr);
  }
  display(arr)
}
