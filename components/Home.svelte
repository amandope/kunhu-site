<style>
	@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);
	main {
	  width: 100%;
	  display: flex;
	  flex-direction: column;
	  align-content: center;
	  justify-content: center;
	}
	figure {
	  text-align: center;
	}
	.social-container {
	  width: 100%;
	  text-align: center;
	}
	.social-icons {
	  padding: 0;
	  list-style: none;
	  margin: 1em;
	}
	.social-icons li {
	  display: inline-block;
	  margin: 0.15em;
	  position: relative;
	  font-size: 1.2em;
	}
	.social-icons i {
	  color: #fff;
	  position: absolute;
	  top: 21px;
	  left: 21px;
	  transition: all 265ms ease-out;
	}
	.social-icons a {
	  display: flex;
	  align-content: center;
	  justify-content: center;
	}
	.social-icons a:before {
	  transform: scale(1);
	  -ms-transform: scale(1);
	  -webkit-transform: scale(1);
	  content: " ";
	  width: 60px;
	  height: 60px;
	  border-radius: 100%;
	  display: block;
	  background: linear-gradient(45deg, #00b5f5, #002a8f);
	  transition: all 265ms ease-out;
	}
	.social-icons a:hover:before {
	  transform: scale(0);
	  transition: all 265ms ease-in;
	}
	.social-icons a:hover i {
	  transform: scale(2.2);
	  -ms-transform: scale(2.2);
	  -webkit-transform: scale(2.2);
	  color: #00b5f5;
	  background: -webkit-linear-gradient(45deg, #00b5f5, #002a8f);
	  -webkit-background-clip: text;
	  -webkit-text-fill-color: transparent;
	  transition: all 265ms ease-in;
	}
	.small {
	  font-size: small;
	  text-align: center;
	}
</style>
<main>
  <figure>
    <img src="" alt="" />
    <h2>നമസ്കാരം</h2>
  </figure>
  <p></p>
  <nav>
  <div class="social-container">
    <ul class="social-icons">
        <li><a href="https://www.youtube.com/channel/UCaPt6hBLf9EePaA0PBia1CA"><i class="fa fa-youtube"></i></a></li>
    </ul>
  </nav>
	<a href="#/admin/create" class="small">Create new post</a>




	<iframe width="560" height="315" src="https://www.youtube.com/embed/QMEJ4JjM76M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</main>