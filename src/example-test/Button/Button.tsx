import styles from './Button.module.scss'

const Button = ({ onClick }: Props) => (
  <button className={styles.button} onClick={onClick}>
    Click Me
  </button>
)

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export default Button
