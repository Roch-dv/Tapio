function deleteLine(item){
  if ((item.parentNode.parentNode.parentNode.parentNode.nextElementSibling == null ) && (item.parentNode.parentNode.parentNode.parentNode.previousElementSibling.nodeName == 'P' )) {
    return
  } else {
    item.parentNode.parentNode.parentNode.parentNode.remove();
  }
}
