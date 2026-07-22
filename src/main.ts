import '@/styles/main.scss';

const filesUploadInput = document.getElementById('files-upload-input') as HTMLInputElement;

const imagesList = document.getElementById('images-list') as HTMLUListElement;

const previewCanvas = document.getElementById('preview-canvas') as HTMLCanvasElement;

const ratioButtons: Record<string, HTMLButtonElement> = {
  '1:1': document.getElementById('ratio-button-1-1') as HTMLButtonElement,
  '4:3': document.getElementById('ratio-buttons-4-3') as HTMLButtonElement,
  '3:4': document.getElementById('ratio-buttons-3-4') as HTMLButtonElement,
  '16:9': document.getElementById('ratio-buttons-16-9') as HTMLButtonElement,
  '9:16': document.getElementById('ratio-buttons-9-16') as HTMLButtonElement,
};

const orientationButtons: Record<string, HTMLButtonElement> = {
  ccw: document.getElementById('orientation-button-ccw') as HTMLButtonElement,
  cw: document.getElementById('orientation-button-cw') as HTMLButtonElement,
};

const orientationResetButton = document.getElementById('orientation-button-reset');

const rotationSlider = document.getElementById('rotation-slider') as HTMLInputElement;

const zoomButtons: Record<string, HTMLButtonElement> = {
  in: document.getElementById('zoom-button-in') as HTMLButtonElement,
  out: document.getElementById('zoom-button-in') as HTMLButtonElement,
};

const zoomSelect = document.getElementById('zoom-select') as HTMLSelectElement;
const zoomResetButton = document.getElementById('zoom-button-reset') as HTMLButtonElement;

rotationSlider.addEventListener('dblclick', () => {
  rotationSlider.value = '0';
});

window.addEventListener('resize', () => {
  const { width, height } = previewCanvas.getBoundingClientRect();

  previewCanvas.width = width;
  previewCanvas.height = height;
});
