<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>NPIA</title>

          <!-- Vendor CSS Files -->


      <!-- Vendor JS Files -->
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <style>
    .whatsapp {
    position: fixed;
    bottom: 10px;
    left: 10px;
    height: 80px;
    width: 80px;
    z-index: 9999;
    }
      </style>
    </head>
    <body style="">
    <div class="whatsapp">
        <a href="https://wa.me/8178126122">
            <img src="/images/WhatsApp_icon.png" alt="whatsapp" width="100%" />
        </a>
    </div>
    <div id="app"></div>
        @viteReactRefresh
        @vite(['resources/js/main.js'])
        @vite(['resources/js/App.jsx'])
    </body>

</html>
