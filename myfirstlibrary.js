function squarsemeetingeachother(thecoolsquare,thecoolersquare){


    if (thecoolsquare.x  - thecoolersquare.x < thecoolersquare.width/2 + thecoolsquare.width/2
      && thecoolersquare.x - thecoolsquare.x < thecoolersquare.width/2 + thecoolsquare.width/2
      && thecoolsquare.y - thecoolersquare.y < thecoolersquare.height/2 + thecoolsquare.height/2
      && thecoolersquare.y - thecoolsquare.y < thecoolersquare.height/2 + thecoolsquare.height/2) {
    return true;
  }
  else {
    return false;
  }
  
  
  }