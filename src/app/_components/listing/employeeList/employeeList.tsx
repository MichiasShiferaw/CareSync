import React,{FC} from 'react';
import CardGroup from '../../card/cardGroup';
import BasicCard from '../../card/basicCard';

// const employeeList= ({department, onView}) => {
  const employeeList = ()=>{

  // A function to pick a random .svg based on gender

const department= [
    {
    firstName: 'John',
    lastName: 'Doe',
    id: 1324234,
    gender: 'Male',
    role: 'Doctor',
    icon: '/assets/MaleAvatar.svg',
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    id: 2121323,
    gender: 'Female',
    role: 'Charged Nurse',
    icon: '/assets/FemaleAvatar2.svg',
  },
  {
    firstName: 'Alice',
    lastName: 'Johnson',
    id: 312312,
    gender: 'Female',
    role: 'Staff Member',
    icon: '/assets/FemaleAvatar1.svg',
  },
  // Repeat the structure below as needed
  {
    firstName: 'Bob',
    lastName: 'Williams',
    id: 41231,
    gender: 'Male',
    role: 'Doctor',
    icon: '/assets/MaleAvatar2.svg',
  },
  {
    firstName: 'Eva',
    lastName: 'Brown',
    id: 5234,
    gender: 'Female',
    role: 'Charged Nurse',
    icon: '/assets/FemaleAvatar.svg',
  },
  {
    firstName: 'Michael',
    lastName: 'Miller',
    id: 623231,
    gender: 'Male',
    role: 'Staff Member',
    icon: '/assets/MaleAvatar1.svg',
  },
    {
    firstName: 'Sophia',
    lastName: 'Davis',
    id: 12317,
    gender: 'Female',
    role: 'Doctor',
    icon: '/assets/FemaleAvatar2.svg',
},
{
    firstName: 'Matthew',
    lastName: 'Jones',
    id: 123123,
    gender: 'Male',
    role: 'Charged Nurse',
    icon: '/assets/MaleAvatar.svg',
},
{
    firstName: 'Olivia',
    lastName: 'White',
    id: 12312,
    gender: 'Female',
    role: 'Staff Member',
    icon: '/assets/FemaleAvatar.svg',
},
{
    firstName: 'William',
    lastName: 'Moore',
    id: 123123,
    gender: 'Male',
    role: 'Doctor',
    icon: '/assets/MaleAvatar.svg',
},
{
    firstName: 'Ava',
    lastName: 'Taylor',
    id: 54254,
    gender: 'Female',
    role: 'Charged Nurse',
    icon: '/assets/FemaleAvatar.svg',
},
{
    firstName: 'Liam',
    lastName: 'Anderson',
    id: 5654,
    gender: 'Male',
    role: 'Staff Member',
    icon: '/assets/MaleAvatar2.svg',
},


{
    firstName: 'Zara',
    lastName: 'Lee',
    id: 56456456,
    gender: 'Female',
    role: 'Staff Member',
    icon: '/assets/FemaleAvatar1.svg',
},

];

  const cards = department.map((employee, index) => ({
    imageUrl: employee.icon,
    title: `${employee.firstName} ${employee.lastName}`,
    subsection: "#"+employee.id,
    bodyPart1: employee.gender,
    bodyPart2: employee.role,
  }));
  
  return (
    <div className="">
          <CardGroup cards={cards} />
    </div>
  )
}

export default employeeList