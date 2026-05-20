export interface SlideProps {
  onEnter: () => void;
  onNext: () => void;
  onPrev: () => void;
  goTo: (index: number) => void;
  current: number;
}
