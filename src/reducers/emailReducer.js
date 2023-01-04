export const emailReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'FILTER':
      return {
        ...state,
        currentFilter: payload,
        emails: state.allEmails.filter(email => {
          if (payload === 'all') {
            return true;
          } else if (payload === 'unread') {
            return !email.read;
          } else {
            return email[payload];
          }
        })
      };
    case 'BULK_UPDATE':
      return {
        ...state,
        allEmails: state.allEmails.map(email =>
          payload.ids.includes(email.id)
            ? { ...email, [payload.key]: payload.value }
            : email
        )
      };
    case 'ARCHIVE':
      return {
        ...state,
        allEmails: state.allEmails.map(email =>
          payload.includes(email.id) ? { ...email, archive: true } : email
        ),
        emails: state.emails.filter(email => !payload.includes(email.id))
      };
    case 'DELETE':
      return {
        ...state,
        allEmails: state.emails.filter(email => !payload.includes(email.id)),
        emails: state.emails.filter(email => !payload.includes(email.id))
      };
    case 'READ':
      return {
        ...state,
        emails: state.emails.map(email =>
          payload.includes(email.id) ? { ...email, read: !email.read } : email
        )
      };
    case 'SNOOZE':
      return {
        ...state,
        allEmails: state.emails.map(email =>
          payload.includes(email.id) ? { ...email, snooze: true } : email
        )
      };
    case 'RESET':
      return {
        ...state,
        emails: state.allEmails,
        currentFilter: 'all'
      };
    default:
      return state;
  }
};
