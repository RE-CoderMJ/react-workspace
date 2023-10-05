import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css'

export default function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem expense={props.items[0]} />
      <ExpenseItem expense={props.items[1]} />
      <ExpenseItem expense={props.items[2]} />
      <ExpenseItem expense={props.items[3]} />
    </Card>
  );
}
