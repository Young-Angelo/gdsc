---
title: "Google Developer Student Club"
subtitle: "GEC,Thrissur"
description: "At GDSC GEC Thrissur, our aim is to learn and teach. Developers, designers and managers come together under one roof to create a community which inspires thousands. Join Us!"
date: 2019-02-18T12:27:33-06:00
images:
  - img/landing.svg
show_action_link: true
action_link: /about
action_label: "Read More &rarr;"
action_type: text # text, button
type: home
---

** index doesn't contain a body, just front matter above.
See index.html in the layouts folder **

<script>
  document.addEventListener('DOMContentLoaded', function() {
    var title = document.querySelector('.title');
    var words = title.innerText.split(' ');

    title.innerHTML = words.map(function(word) {
      return '<span style="color: ' +  + ';">' + word + '</span>';
    }).join(' ');

 
    }
  });
</script>
