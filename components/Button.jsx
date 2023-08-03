import { StyleSheet } from 'react-native';

export const Button = ({ children }) => {
  return <button style={styles.button}>{children}</button>;
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
});
