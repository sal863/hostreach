#!/usr/bin/env node
/**
 * HostReach - Automated Airbnb Host Reactivation Campaigns
 * Main entry point
 */

import 'dotenv/config';

async function main() {
  console.log('🏠 HostReach v0.1.0');
  console.log('Automated Airbnb host reactivation campaigns\n');
  
  console.log('Available commands:');
  console.log('  npm run scrape   - Fetch Airbnb listings');
  console.log('  npm run generate - Generate email campaigns');
  console.log('  npm run outreach - Send host outreach');
  console.log('\n⚠️  Development in progress...');
}

main().catch(console.error);
