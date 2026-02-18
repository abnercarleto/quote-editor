export interface Configuration {
  nodeEnv: string;
  port: number;
  database: {
    url: string;
  };
}

export default (): Configuration => ({
  nodeEnv: process.env.NODE_ENV || 'development',
  port: parseInt(process.env.PORT || '3000', 10),
  database: {
    url: process.env.DATABASE_URL || 'mongodb://localhost:27017/quote-editor',
  },
});
