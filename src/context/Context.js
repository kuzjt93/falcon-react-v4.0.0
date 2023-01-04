import { createContext } from 'react';
import { settings } from 'config';

const AppContext = createContext(settings);

export const EmailContext = createContext({ emails: [] });

export const ProductContext = createContext({ products: [] });

export const CourseContext = createContext({ courses: [], primaryCourses: [] });

export const FeedContext = createContext({ feeds: [] });

export const AuthWizardContext = createContext({ user: {} });

export const ChatContext = createContext();

export const KanbanContext = createContext({
  KanbanColumns: [],
  kanbanTasks: []
});

export default AppContext;
