// Liste des chapitres et images par chapitre
const chapters = {
    chap1: ['page 1.png', 'page 2.png', 'page 3.png', 'page 4.png', 'page 5.png', 'page 6.png', 'page 7.png', 'page 8.png', 'page 9.png', 'page 10.png', 'page 11.png', 'page 12.png', 'page 13.png', 'page 14.png', 'page 15.png', 'page 16.png', 'page 17.png', 'page 18.png', 'page 19.png', 'page 20.png', 'page 21.png', 'page 22.png', 'page 23.png', 'page 24.png', 'page 25.png', 'page 26.png', 'page 27.png', 'page 28.png', 'page 29.png', 'page 30.png', 'page 31.png', 'page 32.png', 'page 33.png', 'page 34.png', 'page 35.png', 'page 36.png', 'page 37.png', 'page 38.png', 'page 39.png', 'page 40.png', 'page 41.png', 'page 42.png', 'page 43.png', 'page 44.png', 'page 45.png', 'page 46.png', 'page 47.png', 'page 48.png', 'page 49.png', 'page 50.png', 'page 51.png', 'page 52.png', 'page 53.png', 'page 54.png', 'page 55.png'],
    chap2: ['page 1.png', 'page 2.png', 'page 3.png', 'page 4.png', 'page 5.png', 'page 6.png', 'page 7.png', 'page 8.png', 'page 9.png', 'page 10.png', 'page 11.png', 'page 12.png', 'page 13.png', 'page 14.png', 'page 15.png', 'page 16.png', 'page 17.png', 'page 18.png', 'page 19.png', 'page 20.png', 'page 21.png', 'page 22.png', 'page 23.png', 'page 24.png'],
    chap3: ['page 1.png', 'page 2.png', 'page 3.png', 'page 4.png', 'page 5.png', 'page 6.png', 'page 7.png', 'page 8.png', 'page 9.png', 'page 10.png', 'page 11.png', 'page 12.png', 'page 13.png', 'page 14.png', 'page 15.png', 'page 16.png', 'page 17.png', 'page 18.png', 'page 19.png', 'page 20.png', 'page 21.png', 'page 22.png'],
    chap4: ['page 1.png', 'page 2.png', 'page 3.png', 'page 4.png', 'page 5.png', 'page 6.png', 'page 7.png', 'page 8.png', 'page 9.png', 'page 10.png', 'page 11.png', 'page 12.png', 'page 13.png', 'page 14.png', 'page 15.png', 'page 16.png', 'page 17.png', 'page 18.png', 'page 19.png', 'page 20.png'],
    chap5: ['page 1.png', 'page 2.png', 'page 3.png', 'page 4.png', 'page 5.png', 'page 6.png', 'page 7.png', 'page 8.png', 'page 9.png', 'page 10.png', 'page 11.png', 'page 12.png', 'page 13.png', 'page 14.png', 'page 15.png', 'page 16.png', 'page 17.png', 'page 18.png', 'page 19.png', 'page 20.png'],
    chap6: ['page 1.png', 'page 2.png', 'page 3.png', 'page 4.png', 'page 5.png', 'page 6.png', 'page 7.png', 'page 8.png', 'page 9.png', 'page 10.png', 'page 11.png', 'page 12.png', 'page 13.png', 'page 14.png', 'page 15.png', 'page 16.png', 'page 17.png', 'page 18.png', 'page 19.png', 'page 20.png', 'page 21.png', 'page 22.png'],
    chap7: ['page 1.png', 'page 2.png', 'page 3.png', 'page 4.png', 'page 5.png', 'page 6.png', 'page 7.png', 'page 8.png', 'page 9.png', 'page 10.png', 'page 11.png', 'page 12.png', 'page 13.png', 'page 14.png', 'page 15.png', 'page 16.png', 'page 17.png', 'page 18.png', 'page 19.png', 'page 20.png', 'page 21.png'],
    chap8: ['page 1.png', 'page 2.png', 'page 3.png', 'page 4.png', 'page 5.png', 'page 6.png', 'page 7.png', 'page 8.png', 'page 9.png', 'page 10.png', 'page 11.png', 'page 12.png', 'page 13.png', 'page 14.png', 'page 15.png', 'page 16.png', 'page 17.png', 'page 18.png', 'page 19.png'],
    chap9: ['page 1.png', 'page 2.png', 'page 3.png', 'page 4.png', 'page 5.png', 'page 6.png', 'page 7.png', 'page 8.png', 'page 9.png', 'page 10.png', 'page 11.png', 'page 12.png', 'page 13.png', 'page 14.png', 'page 15.png', 'page 16.png', 'page 17.png', 'page 18.png', 'page 19.png', 'page 20.png', 'page 21.png', 'page 22.png', 'page 23.png', 'page 24.png', 'page 25.png', 'page 26.png', 'page 27.png', 'page 28.png'],
    chap10: ['page 1.png', 'page 2.png', 'page 3.png', 'page 4.png', 'page 5.png', 'page 6.png', 'page 7.png', 'page 8.png', 'page 9.png', 'page 10.png', 'page 11.png', 'page 12.png', 'page 13.png', 'page 14.png', 'page 15.png', 'page 16.png', 'page 17.png', 'page 18.png', 'page 19.png', 'page 20.png', 'page 21.png', 'page 22.png', 'page 23.png', 'page 24.png', 'page 25.png'],
    chap11: ['page 1.png', 'page 2.png', 'page 3.png', 'page 4.png', 'page 5.png', 'page 6.png', 'page 7.png', 'page 8.png', 'page 9.png', 'page 10.png', 'page 11.png', 'page 12.png', 'page 13.png', 'page 14.png', 'page 15.png', 'page 16.png', 'page 17.png', 'page 18.png', 'page 19.png', 'page 20.png'],
    chap12: ['page 1.png', 'page 2.png', 'page 3.png', 'page 4.png', 'page 5.png', 'page 6.png', 'page 7.png', 'page 8.png', 'page 9.png', 'page 10.png', 'page 11.png', 'page 12.png', 'page 13.png', 'page 14.png', 'page 15.png', 'page 16.png', 'page 17.png', 'page 18.png', 'page 19.png', 'page 20.png', 'page 21.png', 'page 22.png'],
    chap13: ['page 1.png', 'page 2.png', 'page 3.png', 'page 4.png', 'page 5.png', 'page 6.png', 'page 7.png', 'page 8.png', 'page 9.png', 'page 10.png', 'page 11.png', 'page 12.png', 'page 13.png', 'page 14.png', 'page 15.png', 'page 16.png', 'page 17.png', 'page 18.png', 'page 19.png', 'page 20.png'],
    chap14: ['page 1.png', 'page 2.png', 'page 3.png', 'page 4.png', 'page 5.png', 'page 6.png', 'page 7.png', 'page 8.png', 'page 9.png', 'page 10.png', 'page 11.png', 'page 12.png', 'page 13.png', 'page 14.png', 'page 15.png', 'page 16.png', 'page 17.png', 'page 18.png'],
    chap15: ['page 1.png', 'page 2.png', 'page 3.png', 'page 4.png', 'page 5.png', 'page 6.png', 'page 7.png', 'page 8.png', 'page 9.png', 'page 10.png', 'page 11.png', 'page 12.png', 'page 13.png', 'page 14.png', 'page 15.png', 'page 16.png', 'page 17.png', 'page 18.png', 'page 19.png', 'page 20.png'],
    chap16: ['page 1.png', 'page 2.png', 'page 3.png', 'page 4.png', 'page 5.png', 'page 6.png', 'page 7.png', 'page 8.png', 'page 9.png', 'page 10.png', 'page 11.png', 'page 12.png', 'page 13.png', 'page 14.png', 'page 15.png', 'page 16.png', 'page 17.png'],
    chap17: ['page 1.png', 'page 2.png', 'page 3.png', 'page 4.png', 'page 5.png', 'page 6.png', 'page 7.png', 'page 8.png', 'page 9.png', 'page 10.png', 'page 11.png', 'page 12.png', 'page 13.png', 'page 14.png', 'page 15.png', 'page 16.png', 'page 17.png', 'page 18.png', 'page 19.png', 'page 20.png', 'page 21.png', 'page 22.png'],
    chap18: ['page 1.png', 'page 2.png', 'page 3.png', 'page 4.png', 'page 5.png', 'page 6.png', 'page 7.png', 'page 8.png', 'page 9.png', 'page 10.png', 'page 11.png', 'page 12.png', 'page 13.png', 'page 14.png', 'page 15.png', 'page 16.png', 'page 17.png', 'page 18.png', 'page 19.png', 'page 20.png', 'page 21.png', 'page 22.png', 'page 23.png', 'page 24.png'],
    chap19: ['page 1.png', 'page 2.png', 'page 3.png', 'page 4.png', 'page 5.png', 'page 6.png', 'page 7.png', 'page 8.png', 'page 9.png', 'page 10.png', 'page 11.png', 'page 12.png', 'page 13.png', 'page 14.png', 'page 15.png', 'page 16.png', 'page 17.png', 'page 18.png', 'page 19.png', 'page 20.png'],
    chap20: ['page 1.png', 'page 2.png', 'page 3.png', 'page 4.png', 'page 5.png', 'page 6.png', 'page 7.png', 'page 8.png', 'page 9.png', 'page 10.png', 'page 11.png', 'page 12.png', 'page 13.png', 'page 14.png', 'page 15.png', 'page 16.png', 'page 17.png', 'page 18.png', 'page 19.png', 'page 20.png'],
    chap21: ['page 1.png', 'page 2.png', 'page 3.png', 'page 4.png', 'page 5.png', 'page 6.png', 'page 7.png', 'page 8.png', 'page 9.png', 'page 10.png', 'page 11.png', 'page 12.png', 'page 13.png', 'page 14.png', 'page 15.png', 'page 16.png', 'page 17.png', 'page 18.png', 'page 19.png', 'page 20.png'],

  };
  
  let currentChapter = 'chap1';
  let currentIndex = 0;
  
// Initialise les sélecteurs et le compteur
function initializeChapterSelector() {
    const chapterSelectors = document.querySelectorAll('#chapter-selector, #chapter-selector-bottom');
    Object.keys(chapters).forEach(chapter => {
      chapterSelectors.forEach(selector => {
        const option = document.createElement('option');
        option.value = chapter;
        option.textContent = chapter;
        selector.appendChild(option);
      });
    });
    updateSelectors();
  }
  
  // Met à jour le sélecteur de chapitres et le compteur
  function updateSelectors() {
    const chapterSelectors = document.querySelectorAll('#chapter-selector, #chapter-selector-bottom');
    const counters = document.querySelectorAll('#page-counter, #page-counter-bottom');
    chapterSelectors.forEach(selector => (selector.value = currentChapter));
    counters.forEach(counter => {
      counter.textContent = `${currentIndex + 1}/${chapters[currentChapter].length}`;
    });
  }
  
  // Met à jour l'image affichée
  function updateImage() {
    const imageElement = document.getElementById('current-image');
    imageElement.src = `images/${currentChapter}/${chapters[currentChapter][currentIndex]}`;
    updateSelectors();
  }
  
  // Affiche l'image précédente
  function showPreviousImage() {
    if (currentIndex === 0) {
      showPreviousChapter(); // Passe au chapitre précédent
    } else {
      currentIndex--;
      updateImage();
    }
  }
  
  // Affiche l'image suivante
  function showNextImage() {
    if (currentIndex === chapters[currentChapter].length - 1) {
      showNextChapter(); // Passe au chapitre suivant
    } else {
      currentIndex++;
      updateImage();
    }
  }
  
  // Change de chapitre via le sélecteur
  function changeChapter() {
    const selector = document.getElementById('chapter-selector');
    currentChapter = selector.value;
    currentIndex = 0; // Revenir à la première page
    updateImage();
  }
  
  // Affiche le chapitre précédent
  function showPreviousChapter() {
    const chapterKeys = Object.keys(chapters);
    const currentIndexChapter = chapterKeys.indexOf(currentChapter);
    if (currentIndexChapter === 0) {
      return; // Déjà au premier chapitre
    }
    currentChapter = chapterKeys[currentIndexChapter - 1];
    currentIndex = 0; // Première page du nouveau chapitre
    updateImage();
  }
  
  // Affiche le chapitre suivant
  function showNextChapter() {
    const chapterKeys = Object.keys(chapters);
    const currentIndexChapter = chapterKeys.indexOf(currentChapter);
    if (currentIndexChapter === chapterKeys.length - 1) {
      return; // Déjà au dernier chapitre
    }
    currentChapter = chapterKeys[currentIndexChapter + 1];
    currentIndex = 0; // Première page du nouveau chapitre
    updateImage();
  }
  
  // Initialisation
  initializeChapterSelector();
  updateImage();
  