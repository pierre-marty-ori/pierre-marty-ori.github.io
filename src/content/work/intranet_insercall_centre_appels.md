---
title: Insercall Centre D'Appels
publishDate: 2024-06-04 00:00:00
img: /assets/intranet_insercall.png
img_alt: intranet insercall tc
description: |
  Le projet consiste à refaire intégralement l'intranet. Il s'agit d'une application de gestion de missions d'un centre d'appels.
tags:
  - Frontend
  - Backend
---

  <p>
    <ul>
      <li>Accès à l'application différenciée selon des niveaux d'autorisation</li>
      <li>Création de mission selon 3 catégories réception/prospection/enquête : script, intégration d'une base de données d'appelants</li>
      <li>Suivi de mission : formulaire de comptes-rends d'appels, calendrier de prise de rdv</li>
    </ul>
  </p>

  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">Création de la mission</h5>
      <p class="card-text">
        Formulaire de création de la mission, le nom, le type de mission, le nom du client associé à la mission et l'ajout d'un script
        pour les téléconseiller(e)s.
      </p>
    </div>
    <img src="/assets/intranet_insercall_5.png" class="card-img-bottom" alt="creation_mission"/>
  </div>

  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">Création du formulaire pour la mission</h5>
      <p class="card-text">
        On crée le formulaire en choississant les champs que l'on souhaite. On peut bien sûr le modifier plus tard.
      </p>
    </div>
    <img src="/assets/intranet_insercall_6.png" class="card-img-bottom" alt="creation_formulaire_mission"/>
  </div>

  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title">Ajout données</h5>
      <p class="card-text">
        Le compte-rendu de l'appel est retranscrit grâce au formulaire généré au préalable.
      </p>
    </div>
    <img src="/assets/intranet_insercall_7.png" class="card-img-bottom" alt="ajout_données_avec_formulaire"/>
  </div>

  <h2 class="text-center">Galerie</h2>

  <div class="row">
  <div class="column">
    <img src="/assets/intranet_insercall_5.png" style="width:100%" onclick="openModal();currentSlide(1)" class="hover-shadow cursor">
  </div>
  <div class="column">
    <img src="/assets/intranet_insercall_6.png" style="width:100%" onclick="openModal();currentSlide(2)" class="hover-shadow cursor">
  </div>
  <div class="column">
    <img src="/assets/intranet_insercall_7.png" style="width:100%" onclick="openModal();currentSlide(3)" class="hover-shadow cursor">
  </div>
</div>

<div id="myModal" class="modal">
  <span class="close cursor" onclick="closeModal()">&times;</span>
  <div class="modal-content">
    <div class="mySlides">
      <div class="numbertext">1 / 3</div>
      <img src="/assets/intranet_insercall_5.png" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">2 / 3</div>
      <img src="/assets/intranet_insercall_6.png" style="width:100%">
    </div>
    <div class="mySlides">
      <div class="numbertext">3 / 3</div>
      <img src="/assets/intranet_insercall_7.png" style="width:100%">
    </div> 
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>
    <div class="caption-container">
      <p id="caption"></p>
    </div>

<div class="row">
    <div class="column">
      <img class="demo cursor" src="/assets/intranet_insercall_5.png" style="width:100%" onclick="currentSlide(1)" alt="creation mission">
    </div>
    <div class="column">
      <img class="demo cursor" src="/assets/intranet_insercall_6.png" style="width:100%" onclick="currentSlide(2)" alt="creation formulaire mission">
    </div>
    <div class="column">
      <img class="demo cursor" src="/assets/intranet_insercall_7.png" style="width:100%" onclick="currentSlide(3)" alt="ajout données avec formulaire">
    </div>
  </div>
</div>
</div>

<script>
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
</script>

<style>
body {
  font-family: Verdana, sans-serif;
  margin: 0;
}

* {
  box-sizing: border-box;
}

.row > .column {
  padding: 0 8px;
}

.row:after {
  content: "";
  display: table;
  clear: both;
}

.column {
  float: left;
  width: 25%;
}

/* The Modal (background) */
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: black;
}

/* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  width: 90%;
  max-width: 1200px;
}

/* The Close Button */
.close {
  color: white;
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #999;
  text-decoration: none;
  cursor: pointer;
}

.mySlides {
  display: none;
}

.cursor {
  cursor: pointer;
  margin-bottom:1rem;
  height: 125px
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

img {
  margin-bottom: -0.5px;
  border: none !important
}

.caption-container {
  text-align: center;
  background-color: black;
  padding: 2px 16px;
  color: white;
}

.demo {
  opacity: 0.6;
}

.active,
.demo:hover {
  opacity: 1;
}

img.hover-shadow {
  transition: 0.3s;
}

.hover-shadow:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
