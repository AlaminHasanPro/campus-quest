const MyCollegeList = ({ college }) => {
  const { email } = college;
  return (
    <div>
      <li>{email}</li>
    </div>
  );
};

export default MyCollegeList;
