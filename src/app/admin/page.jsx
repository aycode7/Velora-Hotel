"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  CalendarDays,
  CheckCircle2,
  Clock3,
  LogOut,
  RefreshCw,
  XCircle,
  Users,
  Eye,
  Hotel,
  CircleDollarSign,
  BedDouble,
} from "lucide-react";
import { supabase } from "@/lib/supabase";
import "./page.css";

const roomNames = {
  "deluxe-room": "Deluxe Room",
  "executive-room": "Executive Room",
  "deluxe-suite": "Deluxe Suite",
  "family-suite": "Family Suite",
};

const statusLabels = {
  pending: "Pending",
  confirmed: "Confirmed",
  checked_in: "Checked In",
  completed: "Completed",
  cancelled: "Cancelled",
};

const page = () => {
  const router = useRouter();

  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [updatingId, setUpdatingId] = useState(null);

  const fetchBookings = async () => {
    try {
      setRefreshing(true);

      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.replace("/admin/login");
        return;
      }

      const { data, error } = await supabase
        .from("bookings")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Fetch bookings error:", error);
        return;
      }

      setBookings(data || []);
    } catch (error) {
      console.error("Dashboard error:", error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const stats = useMemo(() => {
    const total = bookings.length;

    const pending = bookings.filter(
      (booking) => booking.status === "pending"
    ).length;

    const confirmed = bookings.filter(
      (booking) => booking.status === "confirmed"
    ).length;

    const checkedIn = bookings.filter(
      (booking) => booking.status === "checked_in"
    ).length;

    const completed = bookings.filter(
      (booking) => booking.status === "completed"
    ).length;

    const revenue = bookings
      .filter((booking) => booking.status !== "cancelled")
      .reduce(
        (sum, booking) => sum + Number(booking.total_amount || 0),
        0
      );

    return {
      total,
      pending,
      confirmed,
      checkedIn,
      completed,
      revenue,
    };
  }, [bookings]);

  const updateBookingStatus = async (bookingId, status) => {
    try {
      setUpdatingId(bookingId);

      const { error } = await supabase
        .from("bookings")
        .update({
          status,
          updated_at: new Date().toISOString(),
        })
        .eq("id", bookingId);

      if (error) {
        console.error("Update booking error:", error);
        return;
      }

      setBookings((currentBookings) =>
        currentBookings.map((booking) =>
          booking.id === bookingId
            ? {
                ...booking,
                status,
                updated_at: new Date().toISOString(),
              }
            : booking
        )
      );

      setSelectedBooking((currentBooking) =>
        currentBooking && currentBooking.id === bookingId
          ? {
              ...currentBooking,
              status,
            }
          : currentBooking
      );
    } catch (error) {
      console.error("Status update error:", error);
    } finally {
      setUpdatingId(null);
    }
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.replace("/admin/login");
  };

  const formatDate = (date) => {
    if (!date) return "—";

    return new Date(`${date}T00:00:00`).toLocaleDateString("en-NG", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  const formatDateTime = (date) => {
    if (!date) return "—";

    return new Date(date).toLocaleString("en-NG", {
      dateStyle: "medium",
      timeStyle: "short",
    });
  };

  if (loading) {
    return (
      <main className="admin-loading">
        <div className="admin-spinner" />
        <p>Loading dashboard...</p>
      </main>
    );
  }

  return (
    <main className="admin-page">
      {/* HEADER */}

      <header className="admin-header">
        <div>
          <span className="admin-eyebrow">VELORA HOTEL & SUITES</span>
          <h1>Admin Dashboard</h1>
          <p>Manage your reservations and keep track of your hotel activity.</p>
        </div>

        <div className="admin-header-actions">
          <button
            type="button"
            className="admin-refresh-button"
            onClick={fetchBookings}
            disabled={refreshing}
          >
            <RefreshCw
              size={17}
              className={refreshing ? "spinning" : ""}
            />
            {refreshing ? "Refreshing..." : "Refresh"}
          </button>

          <button
            type="button"
            className="admin-logout-button"
            onClick={handleLogout}
          >
            <LogOut size={17} />
            Logout
          </button>
        </div>
      </header>

      {/* STATS */}

      <section className="admin-stats">
        <div className="admin-stat-card">
          <div className="admin-stat-icon">
            <Hotel size={20} />
          </div>

          <div>
            <span>Total Bookings</span>
            <strong>{stats.total}</strong>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon pending-icon">
            <Clock3 size={20} />
          </div>

          <div>
            <span>Pending</span>
            <strong>{stats.pending}</strong>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon confirmed-icon">
            <CheckCircle2 size={20} />
          </div>

          <div>
            <span>Confirmed</span>
            <strong>{stats.confirmed}</strong>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon">
            <Users size={20} />
          </div>

          <div>
            <span>Checked In</span>
            <strong>{stats.checkedIn}</strong>
          </div>
        </div>

        <div className="admin-stat-card">
          <div className="admin-stat-icon">
            <CircleDollarSign size={20} />
          </div>

          <div>
            <span>Revenue</span>
            <strong>₦{stats.revenue.toLocaleString()}</strong>
          </div>
        </div>
      </section>

      {/* BOOKINGS */}

      <section className="admin-bookings-section">
        <div className="admin-section-heading">
          <div>
            <span>RESERVATIONS</span>
            <h2>Recent Bookings</h2>
          </div>

          <span className="booking-count">
            {bookings.length} {bookings.length === 1 ? "booking" : "bookings"}
          </span>
        </div>

        {bookings.length === 0 ? (
          <div className="empty-bookings">
            <div className="empty-icon">
              <CalendarDays size={25} />
            </div>

            <h3>No bookings yet</h3>

            <p>
              Customer bookings will appear here once someone makes a
              reservation.
            </p>
          </div>
        ) : (
          <div className="bookings-table-wrapper">
            <table className="bookings-table">
              <thead>
                <tr>
                  <th>Guest</th>
                  <th>Room</th>
                  <th>Stay</th>
                  <th>Guests</th>
                  <th>Total</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id}>
                    <td>
                      <div className="guest-cell">
                        <strong>{booking.full_name}</strong>
                        <span>{booking.email}</span>
                      </div>
                    </td>

                    <td>
                      <div className="room-cell">
                        <BedDouble size={16} />
                        <span>
                          {roomNames[booking.room_id] || booking.room_id}
                        </span>
                      </div>
                    </td>

                    <td>
                      <div className="stay-cell">
                        <strong>{formatDate(booking.check_in)}</strong>
                        <span>to {formatDate(booking.check_out)}</span>
                      </div>
                    </td>

                    <td>{booking.guests}</td>

                    <td>
                      <strong>
                        ₦{Number(booking.total_amount).toLocaleString()}
                      </strong>
                    </td>

                    <td>
                      <span
                        className={`status-badge status-${booking.status}`}
                      >
                        {statusLabels[booking.status] || booking.status}
                      </span>
                    </td>

                    <td>
                      <button
                        type="button"
                        className="view-booking-button"
                        onClick={() => setSelectedBooking(booking)}
                      >
                        <Eye size={16} />
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* BOOKING MODAL */}

      {selectedBooking && (
        <div
          className="booking-modal-overlay"
          onClick={() => setSelectedBooking(null)}
        >
          <div
            className="booking-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="booking-modal-header">
              <div>
                <span>BOOKING DETAILS</span>
                <h2>{selectedBooking.full_name}</h2>
              </div>

              <button
                type="button"
                className="modal-close-button"
                onClick={() => setSelectedBooking(null)}
              >
                <XCircle size={22} />
              </button>
            </div>

            <div className="booking-modal-content">
              <div className="modal-detail-grid">
                <div>
                  <span>Room</span>
                  <strong>
                    {roomNames[selectedBooking.room_id] ||
                      selectedBooking.room_id}
                  </strong>
                </div>

                <div>
                  <span>Guests</span>
                  <strong>{selectedBooking.guests}</strong>
                </div>

                <div>
                  <span>Check-in</span>
                  <strong>{formatDate(selectedBooking.check_in)}</strong>
                </div>

                <div>
                  <span>Check-out</span>
                  <strong>{formatDate(selectedBooking.check_out)}</strong>
                </div>

                <div>
                  <span>Total</span>
                  <strong>
                    ₦{Number(selectedBooking.total_amount).toLocaleString()}
                  </strong>
                </div>

                <div>
                  <span>Booked</span>
                  <strong>{formatDateTime(selectedBooking.created_at)}</strong>
                </div>
              </div>

              <div className="modal-contact">
                <h3>Guest Contact</h3>

                <p>
                  <strong>Email:</strong> {selectedBooking.email}
                </p>

                <p>
                  <strong>Phone:</strong> {selectedBooking.phone}
                </p>
              </div>

              {selectedBooking.special_requests && (
                <div className="modal-requests">
                  <h3>Special Requests</h3>
                  <p>{selectedBooking.special_requests}</p>
                </div>
              )}

              <div className="modal-status">
                <h3>Update Status</h3>

                <div className="status-buttons">
                  {Object.entries(statusLabels).map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      className={`modal-status-button ${
                        selectedBooking.status === value ? "active" : ""
                      }`}
                      disabled={updatingId === selectedBooking.id}
                      onClick={() =>
                        updateBookingStatus(selectedBooking.id, value)
                      }
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default page;
