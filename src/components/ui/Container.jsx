import styles from './Container.module.css';

export default function Container({ children, size = 'default', as: Tag = 'div', className = '', ...props }) {
  const cls = [styles.container, styles[size], className].filter(Boolean).join(' ');
  return <Tag className={cls} {...props}>{children}</Tag>;
}
