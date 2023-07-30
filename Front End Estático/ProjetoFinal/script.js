const collapseElementList = document.querySelectorAll('.collapse')
const collapseList = [...collapseElementList].map(collapseEl => new bootstrap.Collapse(collapseEl))

function showViewMoreMenu() {
    document.getElementById("ourMenuCardsHidden").style.display = "block";
  }