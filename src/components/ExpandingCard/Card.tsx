import styles from './Card.module.scss';

type Props = {
  id: string;
  title: string;
  url: string;
  isActive: boolean;
  onClick: () => void;
};

export default function Card({ id, title, url, isActive, onClick }: Props) {
  return (
    <div
      className={`${styles.panel} ${isActive && styles.active}`}
      style={{ backgroundImage: `url('${url}')` }}
      onClick={onClick}
      aria-hidden="true"
      data-testid={id}
    >
      <h3>{title}</h3>
    </div>
  );
}
