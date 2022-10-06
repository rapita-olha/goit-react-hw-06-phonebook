export function addContactFn(allContacts, contact) {
  const a = allContacts.some(
    ({ name, number }) =>
      name.toLowerCase() === contact.name.toLowerCase() ||
      number === contact.number,
  );

  if (a) {
    alert(`${contact.name} is already in contacts.`);
    return allContacts;
  }

  return [...allContacts, contact];
}
