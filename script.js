let replaceUrl=function replaceUrl(newUrl)
{
  window.location.href="https://placebear.com";
}
let stories = document.querySelectorAll(".sub-story");
stories.forEach(story => story.addEventListener('click',removeAndUpdate));

function removeAndUpdate(event)
{
  let image = this.querySelector('img');
  let title = this.querySelector('h2');
  let paragraph = this.querySelector('p');
  let id = this.id;


  if(image.src=="http://placekitten.com/g/250/350")
  {
    image.src="http://placebear.com/250/350";
    title.innerHTML=`Less Important Story ${id}`;
    paragraph.innerHTML="This story has less visual weight.";
  }
  else {
    image.src="http://placekitten.com/g/250/350";
    title.innerHTML=`Not Important Artical ${id}`;
    paragraph.innerHTML="Nobody cares about this artical";
  }
}
