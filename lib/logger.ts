interface LogLevel {
  level: 'info' | 'warn' | 'error' | 'debug';
}

interface LogContext {
  tenantId?: string;
  requestId?: string;
  userId?: string;
  [key: string]: any;
}

class Logger {
  private tenantId?: string;

  constructor(tenantId?: string) {
    this.tenantId = tenantId;
  }

  private formatMessage(level: LogLevel['level'], message: string, context?: LogContext) {
    const timestamp = new Date().toISOString();
    const logEntry = {
      timestamp,
      level,
      message,
      tenantId: this.tenantId,
      ...context,
    };

    return JSON.stringify(logEntry);
  }

  info(message: string, context?: LogContext) {
    console.log(this.formatMessage('info', message, context));
  }

  warn(message: string, context?: LogContext) {
    console.warn(this.formatMessage('warn', message, context));
  }

  error(message: string, context?: LogContext) {
    console.error(this.formatMessage('error', message, context));
  }

  debug(message: string, context?: LogContext) {
    console.debug(this.formatMessage('debug', message, context));
  }
}

export const logger = new Logger(process.env.NEXT_PUBLIC_TENANT_ID);
export { Logger };
