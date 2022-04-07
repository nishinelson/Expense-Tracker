import { View} from 'react-native';


import ExpensesList from './ExpensesList';
import ExpensesSumamry from './ExpensesSummary';


function ExpensesOutput({expenses}) {
  return (
    <View>
      <ExpensesSumamry/>
      <ExpensesList/>
    </View>
  )
}

export default ExpensesOutput;
