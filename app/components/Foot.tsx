'use client'
import Link from 'next/link'
import React from 'react'

export default function Foot() {
  return (
    <div>

      <div>
        <div>
          <menu>
            <li>
              <button>
                Home
              </button>
            </li>
            <li>
              <button>
                About
              </button>
            </li>
            <li>
              <button>
                Contact
              </button>
            </li>
            <li>
              <button>
                Schedule
              </button>
            </li>
            <li>
              <button>
                Location
              </button>
            </li>
            <li>
              <Link
              title='Hobby Shop Privacy Policy'
              href='/privacy'
              >
                Privacy policy
              </Link>
            </li>
          </menu>
        </div>
        <div></div>
        <div></div>
      </div>

    </div>
  )
}
