//M.Sidenav.init(document.querySelectorAll('.sidenav'), {edge: 'right'});  
document.addEventListener('DOMContentLoaded', function() { 
    // Initialize side navigation 
    var sidenavElems = document.querySelectorAll('.sidenav'); M.Sidenav.init(sidenavElems, {edge: 'right'}); 
    // You can add more Materialize component initializations here if needed 
    });