export default function PrivateRoute() {
  return <h1>You cannot access this page</h1>;
}

/*
Folders starting with an underscore are not routable in Next.js.

These are useful for:
- Keeping UI logic separate from routing logic
- Consistent way to organize internal files in the project
- Making it easier to group related files 
- Avoid potential naming conflicts

If you want an underscore folder to be routable,
you can use "%5F" instead. That's the URL encoding for "_".
*/