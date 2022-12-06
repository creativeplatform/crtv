const DarkTheme = () => {
    return (
      <style jsx global>
        {`
         Copied here the entire dark mode style sheet from node modules (around 5000 lines)
        `}
      </style>
    );
  };
  
  const LightTheme = () => {
    return (
      <style jsx global>
        {`
         Copied here the entire light mode style sheet from node modules (around 5000 lines)
        `}
      </style>
    );
  };
  
  export default function Theme({ link }) {
    // if (theme == "dark") {
    //   return <DarkTheme />;
    // }
    return (
        <link rel="stylesheet" href={link}></link>
    //     <style jsx global>
    //     {`
    //      Copied here the entire light mode style sheet from node modules (around 5000 lines)
    //     `}
    //   </style>
    )
  }