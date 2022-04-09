import { View, StyleSheet } from 'react-native';
import { GlobalStyles } from '../../constants/styles';


import ExpensesList from './ExpensesList';
import ExpensesSumamry from './ExpensesSummary';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    description: 'Elden Ring',
    amount: 59.99,
    date: new Date('2021-10-20')
  },
  {
    id: 'e2',
    description: 'Xbox Series X',
    amount: 550.99,
    date: new Date('2021-12-25')
  },
  {
    id: 'e3',
    description: 'Cat stuff',
    amount: 19.99,
    date: new Date('2022-03-12')
  },
  {
    id: 'e4',
    description: 'eggs',
    amount: 5.99,
    date: new Date('2022-04-05')
  },
  {
    id: 'e5',
    description: 'Elden Ring',
    amount: 59.99,
    date: new Date('2021-10-20')
  },
  {
    id: 'e6',
    description: 'Xbox Series X',
    amount: 550.99,
    date: new Date('2021-12-25')
  },
  {
    id: 'e7',
    description: 'Cat stuff',
    amount: 19.99,
    date: new Date('2022-03-12')
  },
  {
    id: 'e8',
    description: 'eggs',
    amount: 5.99,
    date: new Date('2022-04-05')
  }
];


function ExpensesOutput({expenses, expensesPeriod}) {
  return (
    <View style={styles.container}>
      <ExpensesSumamry expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  )
}

export default ExpensesOutput;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 0,
    backgroundColor: 'white'
  }
})
